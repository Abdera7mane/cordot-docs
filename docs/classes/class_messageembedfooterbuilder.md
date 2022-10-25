  
# MessageEmbedFooterBuilder
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to build message embed footers.  
  
## Methods
  
| return type                                                                     | signature                                                                                                                                                |
|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| [MessageEmbedFooterBuilder](./class_messageembedfooterbuilder.md)               | [set\_icon\_url](#method-set-icon-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) icon\_url **)**                     |
| [MessageEmbedFooterBuilder](./class_messageembedfooterbuilder.md)               | [set\_proxy\_icon\_url](#method-set-proxy-icon-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) proxy\_icon\_url **)** |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [build](#method-build) **(**  **)**                                                                                                                      |  
  
## Method Descriptions
  
- <a name="method-MessageEmbedFooterBuilder"></a>[MessageEmbedFooterBuilder](./class_messageembedfooterbuilder.md) **MessageEmbedFooterBuilder** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) text **)**  
  
	Construct a new `MessageEmbedFooterBuilder` instance.
	`text` sets the footer's text.  
________________

- <a name="method-set-icon-url"></a>[MessageEmbedFooterBuilder](./class_messageembedfooterbuilder.md) **set\_icon\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) icon\_url **)**  
  
	Sets the footer's icon.
	`icon_url` only supports http(s) and attachments based URL.  
________________

- <a name="method-set-proxy-icon-url"></a>[MessageEmbedFooterBuilder](./class_messageembedfooterbuilder.md) **set\_proxy\_icon\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) proxy\_icon\_url **)**  
  
	Sets the footer's proxy icon url.  
________________

- <a name="method-build"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **build** **(**  **)**  
  
	Returns the embed footer data as a `Dictionary`.  
________________

  
