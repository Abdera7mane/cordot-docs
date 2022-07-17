  
# Snowflake
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                              | name               |
|-------------------------------------------------------------------|--------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [id](#property-id) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                                                      |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Snowflake](./class_snowflake.md)                                       | [Snowflake](#method-Snowflake) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_id **)**                                                              |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [get\_timestamp](#method-get-timestamp) **(**  **)**                                                                                                                           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [get\_internal\_worker\_id](#method-get-internal-worker-id) **(**  **)**                                                                                                       |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [get\_internal\_process\_id](#method-get-internal-process-id) **(**  **)**                                                                                                     |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [get\_increment](#method-get-increment) **(**  **)**                                                                                                                           |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                                                   |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | **static** [snowflakes2integers](#method-snowflakes2integers) **(** [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) snowflakes **)** |  
  
## Constants
  
- <a name="constant-PROCESS-OFFSET"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **PROCESS\_OFFSET** = 12  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-WORKER-OFFSET"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **WORKER\_OFFSET** = 17  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-TIMESTAMP-OFFSET"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **TIMESTAMP\_OFFSET** = 22  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-DISCORD-EPOCH"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **DISCORD\_EPOCH** = 1420070400000  
  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **id**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-Snowflake"></a>[Snowflake](./class_snowflake.md) **Snowflake** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_timestamp** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-internal-worker-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_internal\_worker\_id** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-internal-process-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_internal\_process\_id** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-increment"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **get\_increment** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-snowflakes2integers"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **static** **snowflakes2integers** **(** [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) snowflakes **)**  
  
	PoolIntArray can not hold 64-bit integers
  
