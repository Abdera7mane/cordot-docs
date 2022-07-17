  
# Packets
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Sub Classes
  
________________
  
  
# IdentifyPacket
  
**Inherits:** [Packet](./class_packet.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Methods
  
| return type                                                 | signature                                                                                                            |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [Packets.IdentifyPacket](./class_packets.md#identifypacket) | [IdentifyPacket](#method-IdentifyPacket) **(** [ConnectionState](./class_connectionstate.md) connection\_state **)** |  
  
## Method Descriptions
  
- <a name="method-IdentifyPacket"></a>[Packets.IdentifyPacket](./class_packets.md#identifypacket) **IdentifyPacket** **(** [ConnectionState](./class_connectionstate.md) connection\_state **)**  
  
	> *There is currently no description for this method.*
  
________________
  
  
# ResumePacket
  
**Inherits:** [Packet](./class_packet.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Methods
  
| return type                                             | signature                                                                                                                                                                                    |
|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Packets.ResumePacket](./class_packets.md#resumepacket) | [ResumePacket](#method-ResumePacket) **(** [ConnectionState](./class_connectionstate.md) connection\_state, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) sequence **)** |  
  
## Method Descriptions
  
- <a name="method-ResumePacket"></a>[Packets.ResumePacket](./class_packets.md#resumepacket) **ResumePacket** **(** [ConnectionState](./class_connectionstate.md) connection\_state, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) sequence **)**  
  
	> *There is currently no description for this method.*
  
________________
  
  
# HeartBeatPacket
  
**Inherits:** [Packet](./class_packet.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Methods
  
| return type                                                   | signature                                                                                                                         |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| [Packets.HeartBeatPacket](./class_packets.md#heartbeatpacket) | [HeartBeatPacket](#method-HeartBeatPacket) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) sequence **)** |  
  
## Method Descriptions
  
- <a name="method-HeartBeatPacket"></a>[Packets.HeartBeatPacket](./class_packets.md#heartbeatpacket) **HeartBeatPacket** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) sequence **)**  
  
	> *There is currently no description for this method.*
  
________________
  
  
# RequestGuildMembersPacket
  
**Inherits:** [Packet](./class_packet.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                             |
|-------------------------------------------------------------------------|----------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)  |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [query](#property-query)         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [limit](#property-limit)         |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [precences](#property-precences) |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [user\_ids](#property-user-ids)  |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [nonce](#property-nonce)         |  
  
## Methods
  
| return type                                                                       | signature                                                                                                                                                       |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Packets.RequestGuildMembersPacket](./class_packets.md#requestguildmemberspacket) | [RequestGuildMembersPacket](#method-RequestGuildMembersPacket) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html)   | [get\_payload](#method-get-payload) **(**  **)**                                                                                                                |  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-query"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **query**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-limit"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **limit**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-precences"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **precences**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-user-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **user_ids**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-nonce"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **nonce**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-RequestGuildMembersPacket"></a>[Packets.RequestGuildMembersPacket](./class_packets.md#requestguildmemberspacket) **RequestGuildMembersPacket** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-payload"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **get\_payload** **(**  **)**  
  
	> *There is currently no description for this method.*
  
