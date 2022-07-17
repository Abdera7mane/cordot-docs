  
# Presence
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                  | name                               |
|-----------------------------------------------------------------------|------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)     | [status](#property-status)         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [activities](#property-activities) |
| [BitFlag](./class_bitflag.md)                                         | [platforms](#property-platforms)   |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                                                                                                                                                                                       |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Presence](./class_presence.md)                                         | [Presence](#method-Presence) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                                                                                                                                   |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [on\_desktop](#method-on-desktop) **(**  **)**                                                                                                                                                                                                                                                                  |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [on\_mobile](#method-on-mobile) **(**  **)**                                                                                                                                                                                                                                                                    |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [on\_web](#method-on-web) **(**  **)**                                                                                                                                                                                                                                                                          |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                                                                                                                                                                                    |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | **static** [status\_to\_string](#method-status-to-string) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) status **)**                                                                                                                                                                  |
| [DiscordActivity](./class_discordactivity.md)                           | **static** [playing](#method-playing) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) game **)**                                                                                                                                                                                  |
| [DiscordActivity](./class_discordactivity.md)                           | **static** [listening](#method-listening) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) to **)**                                                                                                                                                                                |
| [DiscordActivity](./class_discordactivity.md)                           | **static** [streaming](#method-streaming) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) what, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**                                                                                                 |
| [DiscordActivity](./class_discordactivity.md)                           | **static** [create\_activity](#method-create-activity) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) type, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) stream\_url="" **)** |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Status**  
  
	- **IDLE** = 0  

	- **DND** = 1  

	- **ONLINE** = 2  

	- **INVISIBLE** = 3  

	- **OFFLINE** = 4  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Platforms**  
  
	- **DESKTOP** = 1  

	- **MOBILE** = 2  

	- **WEB** = 4  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-status"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **status**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-activities"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **activities**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-platforms"></a>[BitFlag](./class_bitflag.md) **platforms**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-Presence"></a>[Presence](./class_presence.md) **Presence** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-on-desktop"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **on\_desktop** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-on-mobile"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **on\_mobile** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-on-web"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **on\_web** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-status-to-string"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **static** **status\_to\_string** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) status **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-playing"></a>[DiscordActivity](./class_discordactivity.md) **static** **playing** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) game **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-listening"></a>[DiscordActivity](./class_discordactivity.md) **static** **listening** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) to **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-streaming"></a>[DiscordActivity](./class_discordactivity.md) **static** **streaming** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) what, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) url **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-activity"></a>[DiscordActivity](./class_discordactivity.md) **static** **create\_activity** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) type, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) stream\_url="" **)**  
  
	> *There is currently no description for this method.*
  
