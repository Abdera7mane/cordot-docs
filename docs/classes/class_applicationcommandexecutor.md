  
# ApplicationCommandExecutor
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a class which contains methods for handle application commands.  
  
## Methods
  
| return type                                                                                                         | signature                                                                                                                                                                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ApplicationCommandExecutor.MessageComponentAwaiter](./class_applicationcommandexecutor.md#messagecomponentawaiter) | [await\_components](#method-await-components) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) timeout, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) repeat=-1 **)** |
| void                                                                                                                | [\_on\_slash\_command](#method--on-slash-command) **(** [DiscordSlashCommand](./class_discordslashcommand.md) \_command **)** <u>_virtual_</u>                                                                                                                                                  |
| void                                                                                                                | [\_on\_user\_command](#method--on-user-command) **(** [DiscordUserCommand](./class_discordusercommand.md) \_command **)** <u>_virtual_</u>                                                                                                                                                      |
| void                                                                                                                | [\_on\_message\_command](#method--on-message-command) **(** [DiscordMessageCommand](./class_discordmessagecommand.md) \_command **)** <u>_virtual_</u>                                                                                                                                          |
| void                                                                                                                | [\_on\_autocomplete](#method--on-autocomplete) **(** [DiscordAutocompleteInteraction](./class_discordautocompleteinteraction.md) \_interaction **)** <u>_virtual_</u>                                                                                                                           |  
  
## Method Descriptions
  
- <a name="method-await-components"></a>[ApplicationCommandExecutor.MessageComponentAwaiter](./class_applicationcommandexecutor.md#messagecomponentawaiter) **await\_components** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) message\_id, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) timeout, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) repeat=-1 **)**  
  
	Waits for message components interaction event, based on a `message_id`,
	`timeout` time in milliseconds and an optional `repeat` count of how many
	events to catch.  
________________

- <a name="method--on-slash-command"></a>void **\_on\_slash\_command** **(** [DiscordSlashCommand](./class_discordslashcommand.md) \_command **)** <u>_virtual_</u>  
  
	Called when a slash command interaction is recieved.  
________________

- <a name="method--on-user-command"></a>void **\_on\_user\_command** **(** [DiscordUserCommand](./class_discordusercommand.md) \_command **)** <u>_virtual_</u>  
  
	Called when a user command interaction is recieved.  
________________

- <a name="method--on-message-command"></a>void **\_on\_message\_command** **(** [DiscordMessageCommand](./class_discordmessagecommand.md) \_command **)** <u>_virtual_</u>  
  
	Called when a message command interaction is recieved.  
________________

- <a name="method--on-autocomplete"></a>void **\_on\_autocomplete** **(** [DiscordAutocompleteInteraction](./class_discordautocompleteinteraction.md) \_interaction **)** <u>_virtual_</u>  
  
	Called when a autocomplete interaction is recieved.
  
  
## Sub Classes
  
________________
  
  
# MessageComponentAwaiter
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Helper class to listen for message components interaction events of a single
message.

example usage:

	var message_id: int = 1234567890
	var timeout_id: int = 20_000 # 20 seconds
	var awaiter := await_components(message_id, 20_000)

	while yield(awaiter.wait(), "completed"):
		var event := awaiter.get_event()
		match event.data.custom_id:
			"hello":
				event.create_reply("hello").submit()
			"bye":
				event.create_reply("Good bye").submit()

	# Timedout  
  
## Methods
  
| return type                                                                         | signature                                            |
|-------------------------------------------------------------------------------------|------------------------------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)                 | [wait](#method-wait) **(**  **)** <u>_coroutine_</u> |
| [DiscordMessageComponentInteraction](./class_discordmessagecomponentinteraction.md) | [get\_event](#method-get-event) **(**  **)**         |  
  
## Signals
  
- <a name="signal-timeout"></a>**timeout** **(**  **)**  
  
	Emitted when the awaiter timeouts.
  
  
## Method Descriptions
  
- <a name="method-wait"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **wait** **(**  **)** <u>_coroutine_</u>  
  
	Waits for a message components event. Returns `false` on timeout or when
	`repeat` count reaches `0`.  
________________

- <a name="method-get-event"></a>[DiscordMessageComponentInteraction](./class_discordmessagecomponentinteraction.md) **get\_event** **(**  **)**  
  
	Gets the interaction event after `wait()` has returned `true`.  
________________

  
