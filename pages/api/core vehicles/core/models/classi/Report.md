---
sidebar_position: 12
---


### Report
La classe `Report` rappresenta un modello Django utilizzato per gestire la configurazione e la pianificazione di report automatizzati. Include dettagli sul tipo di report, i parametri utilizzati, una pianificazione in formato cron e l'obiettivo (target) del report.

---

### Campi:

1. **`report_type`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Tipo del report (es., "financial", "usage", "error").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

2. **`report_params`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Parametri configurabili del report, che possono definire i filtri o le impostazioni (es., "start_date:2023-01-01, end_date:2023-01-31").
   - **Opzioni**:
     - Lunghezza massima: 500 caratteri.

3. **`crontab`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Stringa in formato cron per definire la pianificazione automatizzata del report (es., "0 9 * * *" per ogni giorno alle 9:00).
   - **Opzioni**:
     - Lunghezza massima: 100 caratteri.

4. **`target`**:
   - **Tipo**: `CharField`
   - **Descrizione**: Obiettivo del report, come il destinatario o il sistema in cui verrà inviato (es., "email", "dashboard", "file_storage").
   - **Opzioni**:
     - Lunghezza massima: 200 caratteri.

---

### Metodo speciale `__str__`:
- Ritorna una rappresentazione leggibile della configurazione del report:
  ```python
  def __str__(self):
      return f"Report Type: {self.report_type}, Target: {self.target}"
  ```



