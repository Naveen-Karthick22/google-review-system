from openapi_client import ApiClient, Configuration
from openapi_client.api.default_api import DefaultApi
from openapi_client.models import SurveyRequest

# Configure SDK client
config = Configuration(host="http://127.0.0.1:8000")

with ApiClient(config) as api_client:
    api = DefaultApi(api_client)

    # ✅ 1. Create a new survey
    new_survey = SurveyRequest(
        title="Google Review Demo Survey",
        questions_text="How satisfied are you with the service?"
    )
    created = api.create_survey_surveys_post(new_survey)
    print("✅ Survey created successfully:")
    print(created)

    # ✅ 2. Fetch all surveys
    surveys = api.list_surveys_surveys_get()
    print("\n📋 All Surveys:")
    for s in surveys:
        print(f" - {s['title']} | Status: {s['status']} (ID: {s['id']})")

    # ✅ 3. Approve the first survey
    if surveys:
        first_id = surveys[0]["id"]
        print(f"\n🔄 Approving survey ID: {first_id} ...")
        approved = api.approve_survey_surveys_survey_id_approve_post(first_id)
        print("✅ Survey approved successfully:")
        print(approved)
