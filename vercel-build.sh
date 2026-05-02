#!/bin/bash
set -e

echo "🚀 Starting Vercel build..."

# 在 Vercel 环境中，跳过需要外部 API 的脚本
if [ "$VERCEL" = "1" ]; then
	echo "📦 Running in Vercel environment"
	
	# 跳过 update-anime 等可能失败的脚本
	echo "⏭️  Skipping update scripts in Vercel environment"
	
	# 只运行 astro build
	echo "🔨 Building Astro..."
	pnpm astro build
	
	# pagefind 可选
	echo "🔍 Running pagefind..."
	npx pagefind --site dist || echo "⚠️  pagefind failed, continuing..."
	
	echo "✅ Build completed successfully"
else
	# 本地构建运行完整脚本
	pnpm build
fi
