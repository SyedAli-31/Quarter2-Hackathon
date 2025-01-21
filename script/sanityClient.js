"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId: "gvgizwoi", // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token:"skuByy3LVpqT01pwIHG1n8qjia7D1zfgc1kprCo6bztiUKBZEFqBc1mgKgyR510fGwgIi3yhA0i5ZWPWRtb1yGlRn547EKfFS8aMIM3bXmK0AHJpr7H25yofN2IzUDDOnbGEnrwmXNplcD6u1ciOROPBBTm6WAPzMmehCYGcXpU4pYrIyspg",
});