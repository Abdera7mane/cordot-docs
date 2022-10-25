  
# ApplicationCommandChannelOption
  
**Inherits:** [ApplicationCommandOptionBuilder](./class_applicationcommandoptionbuilder.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build channel options for a slash command.  
  
## Properties
  
| type                                                                                | name                                      |
|-------------------------------------------------------------------------------------|-------------------------------------------|
| [PoolIntArray](https://docs.godotengine.org/en/3.5/classes/class_poolintarray.html) | [channel\_types](#property-channel-types) |  
  
## Methods
  
| return type                                                                   | signature                                                                                                                      |
|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md) | [filter](#method-filter) **(** [PoolIntArray](https://docs.godotengine.org/en/3.5/classes/class_poolintarray.html) types **)** |  
  
## Property Descriptions
  
- <a name="property-channel-types"></a>[PoolIntArray](https://docs.godotengine.org/en/3.5/classes/class_poolintarray.html) **channel_types**  
  
	List of channel types to filter out.
  
  
## Method Descriptions
  
- <a name="method-ApplicationCommandChannelOption"></a>[ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md) **ApplicationCommandChannelOption** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) option\_name **)**  
  
	Constructs a new channel option builder.  
________________

- <a name="method-filter"></a>[ApplicationCommandChannelOption](./class_applicationcommandchanneloption.md) **filter** **(** [PoolIntArray](https://docs.godotengine.org/en/3.5/classes/class_poolintarray.html) types **)**  
  
	Provides a list of `Channel.Type`s to filter out the user's input.  
________________

  
