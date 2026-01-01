# Teste de Performance – QA Helper

Projeto de **teste de performance** utilizando **k6**, **InfluxDB** e **Grafana**, aplicado ao site **QA Helper**. O objetivo é validar desempenho, tempo de resposta e estabilidade da aplicação sob carga.

## Tecnologias Utilizadas

* **k6** – ferramenta de testes de performance
* **InfluxDB** – banco de dados de métricas
* **Grafana** – visualização e análise dos resultados
* **Docker / Docker Compose** – orquestração do ambiente

## O que é testado

* Tempo de resposta (latência)
* Taxa de requisições
* Erros durante execução
* Comportamento do sistema sob múltiplos usuários simultâneos

## Como executar o projeto

1. Subir o ambiente:

   ```bash
   docker-compose up -d
   ```

2. Executar o teste de performance:

   ```bash
   docker-compose run k6 run scripts/script.js
   ```

3. Acessar o Grafana:

   * URL: [http://localhost:3000](http://localhost:3000)
   * Usuário: admin
   * Senha: admin

4. Configurar o Data Source:

   * Tipo: InfluxDB
   * Database: k6
   * URL: [http://influxdb:8086](http://influxdb:8086)

## Objetivo do Projeto

Projeto criado para demonstrar conhecimento prático em testes de performance, métricas e análise de resultados.

---

Desenvolvido por **Thaynara Monteiro** – QA Pleno
