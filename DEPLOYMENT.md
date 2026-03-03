# Deployment Guide: Vercel & Render

## 1. Deploying Frontend to Vercel
1. Go to [Vercel](https://vercel.com/) and log in with GitHub.
2. Click **Add New -> Project**.
3. Import your GitHub repository (`karthikeyavelivela/oneva`).
4. In the configuration settings:
   - **Framework Preset**: Make sure it selects `Vite`.
   - **Root Directory**: Click "Edit" and type `client`.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

## 2. Deploying Backend to Render
1. Go to [Render](https://render.com/) and log in with GitHub.
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository (`karthikeyavelivela/oneva`).
4. In the configuration settings:
   - **Name**: e.g., `ai-student-assistant-backend`
   - **Root Directory**: Type `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. **Environment Variables**:
   Scroll down and add:
   - `OPENAI_API_KEY` = (Your secret OpenAI key)
   - *Note: Do NOT set `PORT`, Render will assign one automatically.*
6. Click **Create Web Service**.

## 3. Connecting Frontend to Deployed Backend
Once Render finishes deploying:
1. Copy the new Render backend URL (e.g., `https://ai-student-assistant-suffix.onrender.com`).
2. Go to your local machine, open `client/src/api.js`.
3. Change `baseURL: 'http://localhost:5000/api'` to `baseURL: 'https://ai-student-assistant-suffix.onrender.com/api'`.
4. Commit and push this change to GitHub so Vercel redeploys with the correct API URL:
   ```bash
   git commit -am "Update API URL for production"
   git push origin main
   ```
