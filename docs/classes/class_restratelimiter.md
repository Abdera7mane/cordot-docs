  
# RESTRateLimiter
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                            | name                                           |
|---------------------------------------------------------------------------------|------------------------------------------------|
| [RegEx](https://docs.godotengine.org/en/3.5/classes/class_regex.html)           | [route\_regex](#property-route-regex)          |
| [RegEx](https://docs.godotengine.org/en/3.5/classes/class_regex.html)           | [webhook\_regex](#property-webhook-regex)      |
| [RegEx](https://docs.godotengine.org/en/3.5/classes/class_regex.html)           | [reactions\_regex](#property-reactions-regex)  |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [buckets](#property-buckets)                   |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [routes](#property-routes)                     |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)             | [global](#property-global)                     |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [retry\_after](#property-retry-after)          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [global\_reset](#property-global-reset)        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [last\_latency\_ms](#property-last-latency-ms) |
| HTTPConnectionPool                                                              | [pool](#property-pool)                         |  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                  |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RESTRateLimiter](./class_restratelimiter.md)                             | [RESTRateLimiter](#method-RESTRateLimiter) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) use\_pool=false **)**                                                                 |
| HTTPResponse                                                              | [request\_async](#method-request-async) **(** [RestRequest](./class_restrequest.md) request **)**                                                                                                          |
| void                                                                      | [add\_bucket](#method-add-bucket) **(** [RESTRateLimitBucket](./class_restratelimitbucket.md) bucket **)**                                                                                                 |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [parse\_route](#method-parse-route) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) endpoint, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) method **)** |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_bucket](#method-get-bucket) **(** [RestRequest](./class_restrequest.md) request **)**                                                                                                                |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [queue\_request](#method-queue-request) **(** [RestRequest](./class_restrequest.md) request **)**                                                                                                          |  
  
## Constants
  
- <a name="constant-LIMIT-HEADER"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **LIMIT\_HEADER** = "X-RateLimit-Limit"  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-REMAINING-HEADER"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **REMAINING\_HEADER** = "X-RateLimit-Remaining"  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-RESET-HEADER"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **RESET\_HEADER** = "X-RateLimit-Reset"  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-RESET-AFTER-HEADER"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **RESET\_AFTER\_HEADER** = "X-RateLimit-Reset-After"  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-BUCKET-HEADER"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **BUCKET\_HEADER** = "X-RateLimit-Bucket"  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-GLOBAL-HEADER"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **GLOBAL\_HEADER** = "X-RateLimit-Global"  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-RETRY-AFTER-HEADER"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **RETRY\_AFTER\_HEADER** = "Retry-After"  
  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-route-regex"></a>[RegEx](https://docs.godotengine.org/en/3.5/classes/class_regex.html) **route_regex**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-webhook-regex"></a>[RegEx](https://docs.godotengine.org/en/3.5/classes/class_regex.html) **webhook_regex**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-reactions-regex"></a>[RegEx](https://docs.godotengine.org/en/3.5/classes/class_regex.html) **reactions_regex**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-buckets"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **buckets**  
  
	bucket_hash: String, bucket: RESTRateLimitBucket  
________________

- <a name="property-routes"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **routes**  
  
	route: String, bucket_hash: String  
________________

- <a name="property-global"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **global**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-retry-after"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **retry_after**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-global-reset"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **global_reset**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-last-latency-ms"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **last_latency_ms**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-pool"></a>HTTPConnectionPool **pool**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-RESTRateLimiter"></a>[RESTRateLimiter](./class_restratelimiter.md) **RESTRateLimiter** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) use\_pool=false **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-request-async"></a>HTTPResponse **request\_async** **(** [RestRequest](./class_restrequest.md) request **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-bucket"></a>void **add\_bucket** **(** [RESTRateLimitBucket](./class_restratelimitbucket.md) bucket **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-parse-route"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **parse\_route** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) endpoint, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) method **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-bucket"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_bucket** **(** [RestRequest](./class_restrequest.md) request **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-queue-request"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **queue\_request** **(** [RestRequest](./class_restrequest.md) request **)**  
  
	> *There is currently no description for this method.*  
________________

  
