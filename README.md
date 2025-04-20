
# Novais API

Esta é a documentação básica da Novais API. A API oferece diversos endpoints úteis para integração com sistemas de streaming, Discord bots e outros serviços. A documentação oficial e base da API está disponível em:

**https://novaisapi.onrender.com/**

---

## Endpoints Disponíveis

### `/watchtime/<channel>`

Retorna o Top 5 usuários com mais tempo de visualização (watchtime) de um canal da Twitch.

- **Método:** `GET`
- **Parâmetro:** 
  - `channel` (obrigatório): Nome do canal da Twitch.

**Exemplo de uso:**
```bash
GET /watchtime/seu_canal
```

**Resposta esperada:**
```
𝗧𝗼𝗽𝗪𝗮𝘁𝗰𝗵𝘁𝗶𝗺𝗲 → 1. Nome - 2d, 3h, 10m / 2. Nome2 - 1d, 2h, 5m / ...
```

---

### `/wins/flamemc/<nick>`

Retorna as vitórias de um jogador no servidor FlameMC.

- **Método:** `GET`
- **Parâmetro:** 
  - `nick` (obrigatório): Nick do jogador.

**Exemplo de uso:**
```bash
GET /wins/flamemc/SeuNick
```

**Resposta esperada:**
```
𝗦𝗲𝘂𝗡𝗶𝗰𝗸 → HG = 25 / FL = 13
```

---

### `/kills/flamemc/<nick>`

Retorna as estatísticas de Kills, Deaths e K/D de um jogador no servidor FlameMC.

- **Método:** `GET`
- **Parâmetro:** 
  - `nick` (obrigatório): Nick do jogador.

**Exemplo de uso:**
```bash
GET /kills/flamemc/SeuNick
```

**Resposta esperada:**
```
𝗦𝗲𝘂𝗡𝗶𝗰𝗸 → Kills = 105 / Deaths = 50 / K/D = 2.10
```

---

## Sobre a API

Este projeto utiliza Flask como servidor web e integra-se com APIs de terceiros para fornecer informações relevantes em tempo real. O endpoint principal está hospedado via `Render`.

---

## Observações

- A API `/watchtime/<channel>` ignora alguns bots e usuários padrão da Twitch.
- Caso os dados não sejam encontrados, a resposta será uma mensagem de erro amigável ao usuário final.
- Caso um comando não tenha um valor após o nome de usuário, será usado o valor padrão configurado (ex: `SeuNick`).

---

## Como Integrar com Comandos de Chat

Para interligar a API com comandos do **StreamElements** ou **Nightbot**, você pode usar os seguintes comandos prontos. Simplesmente copie e cole no seu chat. 

Você pode acessar a documentação completa e os comandos prontos para copiar e colar diretamente no [site oficial da API](https://novaisapi.onrender.com).

---
