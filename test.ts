import { TwitchatEventType, TwitchatActionType } from "./index";

// Cas passant : l'événement et l'action sont valides
const validEvent: TwitchatEventType = "MESSAGE_READ"; // Cas passant
const validAction: TwitchatActionType = "CHAT_FEED_PAUSE"; // Cas passant

// Cas non passant : ceci est censé générer une erreur de type car la valeur n'existe pas
// @ts-expect-error: "INVALID_EVENT" n'est pas une valeur valide pour TwitchatEventType, c'est l'erreur attendue
const invalidEvent: TwitchatEventType = "INVALID_EVENT"; // Cas non passant mais attendu
