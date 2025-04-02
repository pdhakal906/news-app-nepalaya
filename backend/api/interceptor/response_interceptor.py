from rest_framework.renderers import JSONRenderer
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response


class CustomJSONRenderer(JSONRenderer):
    def render(self, data, accepted_media_type=None, renderer_context=None):
        # Get the response status code
        status_code = renderer_context["response"].status_code

        # Check if the data already has custom format
        if isinstance(data, dict) and "status" in data and "data" in data:
            # Data is already formatted how we want
            response_data = data
        else:
            # Format the data according to a standard
            success = 200 <= status_code < 300
            response_data = {
                "status": "SUCCESS" if success else "ERROR",
                "data": data if success else None,
            }

            # Handle error responses
            if not success and isinstance(data, dict):
                if "detail" in data:
                    response_data["message"] = data["detail"]
                else:
                    response_data["errors"] = data

        # Use the JSONRenderer to render the formatted response
        return super().render(response_data, accepted_media_type, renderer_context)


class CustomPagination(LimitOffsetPagination):
    def get_paginated_response(self, data):
        return Response(
            {
                "status": "SUCCESS",
                "data": data,
                "count": self.count,
            }
        )
