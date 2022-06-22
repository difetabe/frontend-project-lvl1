install: # при первом клонировании репозитория или после удаления node_modules
	npm ci
brain-games: #запуск
	node bin/brain-games.js
publish:
	npm publish --dry-run