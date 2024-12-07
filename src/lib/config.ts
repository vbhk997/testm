import Medusa from "@medusajs/medusa-js"

// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app"

if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const medusaClient = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  maxRetries: 3,
})
