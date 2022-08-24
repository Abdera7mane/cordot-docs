  
# BaseWebSocketAdapter
  
**Inherits:** [Node](https://docs.godotengine.org/en/3.5/classes/class_node.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [DiscordWebSocketAdapter](./class_discordwebsocketadapter.md), [VoiceWebSocketAdapter](./class_voicewebsocketadapter.md)  
  
## Properties
  
| type                                                                | name                                        | default |
|---------------------------------------------------------------------|---------------------------------------------|---------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [timeout\_ms](#property-timeout-ms)         | `30000` |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [last\_sequence](#property-last-sequence)   |         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [last\_beat](#property-last-beat)           |         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [latency](#property-latency)                |         |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [reconnecting](#property-reconnecting)      |         |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [auto\_reconnect](#property-auto-reconnect) | `true`  |  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                               |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [setup](#method-setup) **(**  **)**                                                                                                                                                                                                     |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [connect\_to\_gateway](#method-connect-to-gateway) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) verify\_ssl=true **)**                                                                                     |
| void                                                                      | [disconnect\_from\_gateway](#method-disconnect-from-gateway) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) code=1000, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)** |
| void                                                                      | [send\_packet](#method-send-packet) **(** Packet packet **)**                                                                                                                                                                           |
| void                                                                      | [add\_handler](#method-add-handler) **(** PacketHandler handler **)**                                                                                                                                                                   |
| void                                                                      | [remove\_handler](#method-remove-handler) **(** PacketHandler handler **)**                                                                                                                                                             |
| void                                                                      | [dispatch\_packet](#method-dispatch-packet) **(** DiscordPacket packet **)**                                                                                                                                                            |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [is\_connected\_to\_gateway](#method-is-connected-to-gateway) **(**  **)**                                                                                                                                                              |
| void                                                                      | [close](#method-close) **(**  **)**                                                                                                                                                                                                     |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_url](#method-get-url) **(**  **)**                                                                                                                                                                                                |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_class](#method-get-class) **(**  **)**                                                                                                                                                                                            |  
  
## Signals
  
- <a name="signal-connected"></a>**connected** **(**  **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-disconnected"></a>**disconnected** **(**  **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-reconnected"></a>**reconnected** **(**  **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-connection-error"></a>**connection\_error** **(**  **)**  
  
	> *There is currently no description for this signal.*  
________________

- <a name="signal-packet-received"></a>**packet\_received** **(** packet **)**  
  
	> *There is currently no description for this signal.*
  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **CloseEventCode**  
  
	- **UNKOWN\_ERROR** = 4000  

	- **DECODE\_ERROR** = 4002  

	- **SESSION\_NO\_LONGER\_VALID** = 4006  

	- **INVALID\_SEQ** = 4007  

	- **RATE\_LIMITED** = 4008  

	- **INVALID\_SHARD** = 4010  

	- **SHARDING\_REQUIRED** = 4011  

	- **INVALID\_API\_VERSION** = 4012  

	- **INVALID\_INTENTS** = 4013  

	- **DISALLOWED\_INTENTS** = 4014  

	- **FAILED\_TO\_DECODE\_PAY\_LOAD** = 4002  

	- **SESSION\_TIMED\_OUT** = 4009  

	- **SERVER\_NOT\_FOUND** = 4011  

	- **UNKOWN\_PROTOCOL** = 4012  

	- **DISCONNECTED** = 4014  

	- **VOICE\_SERVER\_CRASHED** = 4015  

	- **UNKOWN\_ENCRYPTION\_MODE** = 4015  

	- **UNKOWN\_OPCODE** = 4001  

	- **NOT\_AUTHENTICATED** = 4003  

	- **AUTHENTICATION\_FAILED** = 4004  

	- **ALREADY\_AUTHENTICATED** = 4005  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-timeout-ms"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **timeout_ms**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-last-sequence"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **last_sequence**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-last-beat"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **last_beat**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-latency"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **latency**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-reconnecting"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **reconnecting**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-auto-reconnect"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **auto_reconnect**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-setup"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **setup** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-connect-to-gateway"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **connect\_to\_gateway** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) verify\_ssl=true **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-disconnect-from-gateway"></a>void **disconnect\_from\_gateway** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) code=1000, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) reason="" **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-send-packet"></a>void **send\_packet** **(** Packet packet **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-handler"></a>void **add\_handler** **(** PacketHandler handler **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-remove-handler"></a>void **remove\_handler** **(** PacketHandler handler **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-dispatch-packet"></a>void **dispatch\_packet** **(** DiscordPacket packet **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-is-connected-to-gateway"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_connected\_to\_gateway** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-close"></a>void **close** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_url** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
