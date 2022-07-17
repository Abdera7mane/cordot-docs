  
# RestRequest
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                                  | name                         |
|---------------------------------------------------------------------------------------|------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)               | [url](#property-url)         |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html)       | [headers](#property-headers) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                     | [method](#property-method)   |
| [PoolByteArray](https://docs.godotengine.org/en/3.5/classes/class_poolbytearray.html) | [body](#property-body)       |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                                                                                 |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RestRequest](./class_restrequest.md)                                   | [url](#method-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_url **)**                                                                                              |
| [RestRequest](./class_restrequest.md)                                   | [headers](#method-headers) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_headers **)**                                                                          |
| [RestRequest](./class_restrequest.md)                                   | [set\_header](#method-set-header) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) value **)** |
| [RestRequest](./class_restrequest.md)                                   | [method](#method-method) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_method **)**                                                                                           |
| [RestRequest](./class_restrequest.md)                                   | [method\_get](#method-method-get) **(**  **)**                                                                                                                                                            |
| [RestRequest](./class_restrequest.md)                                   | [method\_head](#method-method-head) **(**  **)**                                                                                                                                                          |
| [RestRequest](./class_restrequest.md)                                   | [method\_post](#method-method-post) **(**  **)**                                                                                                                                                          |
| [RestRequest](./class_restrequest.md)                                   | [method\_put](#method-method-put) **(**  **)**                                                                                                                                                            |
| [RestRequest](./class_restrequest.md)                                   | [method\_delete](#method-method-delete) **(**  **)**                                                                                                                                                      |
| [RestRequest](./class_restrequest.md)                                   | [method\_options](#method-method-options) **(**  **)**                                                                                                                                                    |
| [RestRequest](./class_restrequest.md)                                   | [method\_trace](#method-method-trace) **(**  **)**                                                                                                                                                        |
| [RestRequest](./class_restrequest.md)                                   | [method\_connect](#method-method-connect) **(**  **)**                                                                                                                                                    |
| [RestRequest](./class_restrequest.md)                                   | [method\_patch](#method-method-patch) **(**  **)**                                                                                                                                                        |
| [RestRequest](./class_restrequest.md)                                   | [body](#method-body) **(** [PoolByteArray](https://docs.godotengine.org/en/3.5/classes/class_poolbytearray.html) data **)**                                                                               |
| [RestRequest](./class_restrequest.md)                                   | [json\_body](#method-json-body) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) data **)**                                                                                |
| [RestRequest](./class_restrequest.md)                                   | [empty\_body](#method-empty-body) **(**  **)**                                                                                                                                                            |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_header](#method-get-header) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**                                                                                |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [has\_header](#method-has-header) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) name **)**                                                                              |
| HTTPResponse                                                            | [send\_async](#method-send-async) **(**  **)**                                                                                                                                                            |  
  
## Property Descriptions
  
- <a name="property-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **url**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-headers"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **headers**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-method"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **method**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-body"></a>[PoolByteArray](https://docs.godotengine.org/en/3.5/classes/class_poolbytearray.html) **body**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-url"></a>[RestRequest](./class_restrequest.md) **url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) \_url **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-headers"></a>[RestRequest](./class_restrequest.md) **headers** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) \_headers **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-set-header"></a>[RestRequest](./class_restrequest.md) **set\_header** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) value **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-method"></a>[RestRequest](./class_restrequest.md) **method** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) \_method **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-method-get"></a>[RestRequest](./class_restrequest.md) **method\_get** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-method-head"></a>[RestRequest](./class_restrequest.md) **method\_head** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-method-post"></a>[RestRequest](./class_restrequest.md) **method\_post** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-method-put"></a>[RestRequest](./class_restrequest.md) **method\_put** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-method-delete"></a>[RestRequest](./class_restrequest.md) **method\_delete** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-method-options"></a>[RestRequest](./class_restrequest.md) **method\_options** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-method-trace"></a>[RestRequest](./class_restrequest.md) **method\_trace** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-method-connect"></a>[RestRequest](./class_restrequest.md) **method\_connect** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-method-patch"></a>[RestRequest](./class_restrequest.md) **method\_patch** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-body"></a>[RestRequest](./class_restrequest.md) **body** **(** [PoolByteArray](https://docs.godotengine.org/en/3.5/classes/class_poolbytearray.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-json-body"></a>[RestRequest](./class_restrequest.md) **json\_body** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-empty-body"></a>[RestRequest](./class_restrequest.md) **empty\_body** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-header"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_header** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-has-header"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_header** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) name **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-send-async"></a>HTTPResponse **send\_async** **(**  **)**  
  
	> *There is currently no description for this method.*
  
