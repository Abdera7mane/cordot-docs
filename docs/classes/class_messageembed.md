  
# MessageEmbed
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents an embeded content within a message.  
  
## Properties
  
| type                                                                    | name                                 |
|-------------------------------------------------------------------------|--------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [title](#property-title)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [type](#property-type)               |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [description](#property-description) |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [url](#property-url)                 |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [timestamp](#property-timestamp)     |
| [Color](https://docs.godotengine.org/en/3.5/classes/class_color.html)   | [color](#property-color)             |
| [MessageEmbedFooter](./class_messageembedfooter.md)                     | [footer](#property-footer)           |
| [MessageEmbedImage](./class_messageembedimage.md)                       | [image](#property-image)             |
| [MessageEmbedThumbnail](./class_messageembedthumbnail.md)               | [thumbnail](#property-thumbnail)     |
| [MessageEmbedVideo](./class_messageembedvideo.md)                       | [video](#property-video)             |
| [MessageEmbedProvider](./class_messageembedprovider.md)                 | [provider](#property-provider)       |
| [MessageEmbedAuthor](./class_messageembedauthor.md)                     | [author](#property-author)           |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [fields](#property-fields)           |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Type**  
  
	- **UNKNOWN** = 0  

	- **RICH** = 1  

	- **IMAGE** = 2  

	- **VIDEO** = 3  

	- **GIFV** = 4  

	- **ARTICLE** = 5  

	- **LINK** = 6  

  
	Message embed types.
  
  
## Property Descriptions
  
- <a name="property-title"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **title**  
  
	Title of embed.  
________________

- <a name="property-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **type**  
  
	Type of embed.  
________________

- <a name="property-description"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **description**  
  
	Description of embed  
________________

- <a name="property-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **url**  
  
	Url of embed.  
________________

- <a name="property-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **timestamp**  
  
	Unix timestamp of embed content.  
________________

- <a name="property-color"></a>[Color](https://docs.godotengine.org/en/3.5/classes/class_color.html) **color**  
  
	Color of embed.  
________________

- <a name="property-footer"></a>[MessageEmbedFooter](./class_messageembedfooter.md) **footer**  
  
	Footer information.  
________________

- <a name="property-image"></a>[MessageEmbedImage](./class_messageembedimage.md) **image**  
  
	Image information.  
________________

- <a name="property-thumbnail"></a>[MessageEmbedThumbnail](./class_messageembedthumbnail.md) **thumbnail**  
  
	Tumbnail information.  
________________

- <a name="property-video"></a>[MessageEmbedVideo](./class_messageembedvideo.md) **video**  
  
	Video information.  
________________

- <a name="property-provider"></a>[MessageEmbedProvider](./class_messageembedprovider.md) **provider**  
  
	Provider information.  
________________

- <a name="property-author"></a>[MessageEmbedAuthor](./class_messageembedauthor.md) **author**  
  
	Author information.  
________________

- <a name="property-fields"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **fields**  
  
	List of `MessageEmbedField`s.
  
