# Use a imagem oficial do Node.js
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de configuração do Node.js
COPY package*.json ./

# Instale as dependências do projeto
RUN pnpm install --legacy-peer-deps

# Copie todo o código fonte do projeto
COPY . .

# Construa o aplicativo para produção
RUN pnpm run build

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["pnpm", "start"]