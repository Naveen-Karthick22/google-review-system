# openapi_client.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve_survey_surveys_survey_id_approve_post**](DefaultApi.md#approve_survey_surveys_survey_id_approve_post) | **POST** /surveys/{survey_id}/approve | Approve Survey
[**create_survey_surveys_post**](DefaultApi.md#create_survey_surveys_post) | **POST** /surveys/ | Create Survey
[**list_surveys_surveys_get**](DefaultApi.md#list_surveys_surveys_get) | **GET** /surveys/ | List Surveys
[**read_root_get**](DefaultApi.md#read_root_get) | **GET** / | Read Root


# **approve_survey_surveys_survey_id_approve_post**
> object approve_survey_surveys_survey_id_approve_post(survey_id)

Approve Survey

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    survey_id = 56 # int | 

    try:
        # Approve Survey
        api_response = api_instance.approve_survey_surveys_survey_id_approve_post(survey_id)
        print("The response of DefaultApi->approve_survey_surveys_survey_id_approve_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->approve_survey_surveys_survey_id_approve_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **survey_id** | **int**|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_survey_surveys_post**
> object create_survey_surveys_post(survey_request)

Create Survey

### Example


```python
import openapi_client
from openapi_client.models.survey_request import SurveyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    survey_request = openapi_client.SurveyRequest() # SurveyRequest | 

    try:
        # Create Survey
        api_response = api_instance.create_survey_surveys_post(survey_request)
        print("The response of DefaultApi->create_survey_surveys_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_survey_surveys_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **survey_request** | [**SurveyRequest**](SurveyRequest.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_surveys_surveys_get**
> object list_surveys_surveys_get()

List Surveys

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # List Surveys
        api_response = api_instance.list_surveys_surveys_get()
        print("The response of DefaultApi->list_surveys_surveys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_surveys_surveys_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **read_root_get**
> object read_root_get()

Read Root

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Read Root
        api_response = api_instance.read_root_get()
        print("The response of DefaultApi->read_root_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->read_root_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

