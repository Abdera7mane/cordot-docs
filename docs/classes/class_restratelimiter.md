  
# RESTRateLimiter
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Discord REST API rate limits implementation. The current implementation only
catches some of the most common rate limits, and needs more testing.  
  
## Properties
  
| type                                                                | name                                           |
|---------------------------------------------------------------------|------------------------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [global](#property-global)                     |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [retry\_after](#property-retry-after)          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [global\_reset](#property-global-reset)        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [last\_latency\_ms](#property-last-latency-ms) |
| HTTPConnectionPool                                                  | [pool](#property-pool)                         |  
  
## Methods
  
| return type                                   | signature                                                                                                                                  |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| [RESTRateLimiter](./class_restratelimiter.md) | [RESTRateLimiter](#method-RESTRateLimiter) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) use\_pool=false **)** |
| HTTPResponse                                  | [queue\_request](#method-queue-request) **(** [RestRequest](./class_restrequest.md) request **)** <u>_coroutine_</u>                       |  
  
## Constants
  
  
  
## Property Descriptions
  
- <a name="property-global"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **global**  
  
	Whether we got a global rate limit.  
________________

- <a name="property-retry-after"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **retry_after**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-global-reset"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **global_reset**  
  
	The time in engine ticks millisecond when the global rate limit resets.
	Irrelevant if `global` is `false`.  
________________

- <a name="property-last-latency-ms"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **last_latency_ms**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-pool"></a>HTTPConnectionPool **pool**  
  
	HTTP connection pool reference if enabled.
  
  
## Method Descriptions
  
- <a name="method-RESTRateLimiter"></a>[RESTRateLimiter](./class_restratelimiter.md) **RESTRateLimiter** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) use\_pool=false **)**  
  
	Constructs a new rate limiter. `use_pool` enables the use of HTTP connection
	pool (experimental unstable feature).  
________________

- <a name="method-queue-request"></a>HTTPResponse **queue\_request** **(** [RestRequest](./class_restrequest.md) request **)** <u>_coroutine_</u>  
  
	Queue a request for rate limiting.  
________________

  
