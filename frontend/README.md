# AI Project Management Application Currently work in progress

An intelligent project management system that integrates LLM-based task assistance, in-app notifications, and automated GitHub updates.

## Features

- ⚡ AI-assisted task suggestions and responses
- 🔁 Smart response caching using vector databases
- 📬 Notification system (in-app and email-based)
- 🔗 GitHub integration for automatic issue tracking
- 🌐 WebSocket-enabled real-time frontend
- 🔐 Auth and DB powered by Supabase

## Architecture Overview

- Frontend communicates with backend via API and WebSockets
- Backend handles:
  - Request processing
  - Rate-limited LLM queries
  - Vector DB for response caching
  - Notification queueing
  - GitHub automation
- Supabase handles auth and data storage
- Nginx (or any load balancer) sits at the edge

## Tech Stack

- 🧠 Google gemeni - LLM
- 🗃️ Pinecone - Vector DB
- 🖥️ Supabase (Auth + DB)
- 🔧 Node.js / Python (for backend functions)
- 🌐 WebSockets
- 📨 Cron jobs + queues for email & notifications
- ☁️ Nginx / Load balancer

## Setup

> WIP – coming soon use the following command to run the frontend
> npm i
> npm run dev

## License

MIT
