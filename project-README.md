# ptdv-chat-app Project-Wide README
	
~ Idea is an ongoing chat that captures learning from work, with each new feature added across the Chats consistently "keeping finger in pie"

## Features:

- multi chat room messaging
- send and receive chat messages
- i18n in English, French (Spanish, German, and Arabic Planned)
- (Planned) a11y for all users meeting WCAGAA
- (Planned) themeable Style Guide for devs/designers
- (Planned) OAuth login

## Client:

```
    route           | about                                    | A | R | V |
    ------------------------------------------------------------------------    
    /               | Home (Login planned)                     | + | - | + | 
    /chats          | List Chats (no active chat)              | + | - | + |
    /chats/:id		| Chat + messages                          | + | - | + |
    (?)/settings	| Planned Chat settings                    | ? | ? | ? |
```

## Server:

All calls prefixed with `/api/{call}` and versioning through HTTP headers.

```
    method api          | payload                                    | Notes
    ------------------------------------------------------------------------    
    POST chats          | Create chat                                 ?Admin
    GET  chats          | Get chats as top level list
    POST chats/:id      | Create message in chat :id
    GET  chats/:id      | Get chat messages in chat :id
    DEL  chats/:id      | Delete chat :id                             ?Admin
    PUT  chats/:id?cmd=	| Updates chat :id ?but WITH WHAT? !`action` to `cmd`
    GET  chats/:id?cmd=	| Get Updates from chat :id ?but WHAT?
    GET  locales        | Gets all localized strings
    GET  healthCheck    | Gets status health and sys info     ?api name sense
    (?)POST auth        | Logs in a user                              Planned
    (?)GET  auth        | Checks if user is logged in                 Planned
    (?)DEL  auth        | Logs out a user                             Planned
```
