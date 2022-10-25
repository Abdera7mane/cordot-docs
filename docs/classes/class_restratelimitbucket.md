  
# RESTRateLimitBucket
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                                  |
|-------------------------------------------------------------------------|---------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [key](#property-key)                  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [limit](#property-limit)              |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [remaining](#property-remaining)      |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [reset](#property-reset)              |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [reset\_after](#property-reset-after) |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [auto\_reset](#property-auto-reset)   |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [requests](#property-requests)        |  
  
## Methods
  
| return type                                                               | signature                                                                                                                        |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [get\_remaining](#method-get-remaining) **(**  **)**                                                                             |
| void                                                                      | [set\_reset\_after](#method-set-reset-after) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after **)** |
| void                                                                      | [use](#method-use) **(**  **)**                                                                                                  |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [delay](#method-delay) **(**  **)**                                                                                              |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [time\_to\_wait](#method-time-to-wait) **(**  **)**                                                                              |
| void                                                                      | [add\_to\_queue](#method-add-to-queue) **(** [RestRequest](./class_restrequest.md) request **)**                                 |
| void                                                                      | [remove\_from\_queue](#method-remove-from-queue) **(** [RestRequest](./class_restrequest.md) request **)**                       |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [wait\_for\_queue](#method-wait-for-queue) **(** [RestRequest](./class_restrequest.md) request **)**                             |  
  
## Signals
  
- <a name="signal-queue-update"></a>**queue\_update** **(**  **)**  
  
	> *There is currently no description for this signal.*
  
  
## Property Descriptions
  
- <a name="property-key"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **key**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-limit"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **limit**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-remaining"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **remaining**  
	  
	|          | method           |
	|----------|------------------|
	| *Getter* | get\_remaining() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-reset"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **reset**  
  
	uses engine ticks in milliseconds  
________________

- 	<a name="property-reset-after"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **reset_after**  
	  
	|          | method                   |
	|----------|--------------------------|
	| *Setter* | set\_reset\_after(value) |  
  
	in milliseconds  
________________

- <a name="property-auto-reset"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **auto_reset**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-requests"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **requests**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-RESTRateLimitBucket"></a>[RESTRateLimitBucket](./class_restratelimitbucket.md) **RESTRateLimitBucket** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) key, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) remaining, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) reset\_after=-1 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-remaining"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_remaining** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-set-reset-after"></a>void **set\_reset\_after** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-use"></a>void **use** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delay"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delay** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-time-to-wait"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **time\_to\_wait** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-to-queue"></a>void **add\_to\_queue** **(** [RestRequest](./class_restrequest.md) request **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-remove-from-queue"></a>void **remove\_from\_queue** **(** [RestRequest](./class_restrequest.md) request **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-wait-for-queue"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **wait\_for\_queue** **(** [RestRequest](./class_restrequest.md) request **)**  
  
	> *There is currently no description for this method.*
  
