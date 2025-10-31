from sdk.openapi_client import ApiClient, Configuration
from sdk.openapi_client.api.default_api import DefaultApi

# Configure the SDK to connect to your running FastAPI server
config = Configuration(host="http://127.0.0.1:8000")

with ApiClient(config) as api_client:
    api = DefaultApi(api_client)
    response = api.list_surveys_surveys_get()
    print("✅ Surveys fetched successfully!")
    print(response)