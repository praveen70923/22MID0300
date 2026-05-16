# Campus Hiring Evaluation - Backend

This repository contains the backend solutions implemented as part of the campus hiring evaluation. The project focuses on REST APIs, backend logic implementation, scheduling optimization, notification prioritization, and system design concepts.

## Modules Implemented

### 1. Logging Middleware
A reusable logging middleware was implemented to handle application logs across different modules. The middleware was integrated wherever logging was required as per the evaluation instructions.

### 2. Vehicle Maintenance Scheduler
This module fetches depot and vehicle task details from protected APIs and determines the optimal set of maintenance tasks based on the available mechanic hours. The solution uses Dynamic Programming (0/1 Knapsack approach) to maximize operational impact.

### 3. Notification System Design
The notification system design document contains:
- REST API design
- Request and response structures
- Database schema suggestions
- Query optimization approaches
- Scaling considerations
- Real-time notification handling strategies
- Queue and reliability improvements

### 4. Notification Priority Backend
This module fetches notifications from the provided API and prioritizes them based on notification type and importance. Priority handling was implemented for categories such as:
- Placement
- Result
- Event

The top priority notifications are displayed accordingly.

---

## Technologies Used

- Node.js
- Express.js
- Axios
- JavaScript
- Git & GitHub

---

## Folder Structure

- `logging_middleware` → Logging middleware implementation
- `vehicle_maintence_scheduler` → Vehicle scheduling solution
- `notification_app_be` → Notification priority implementation
- `Outputs` → Output screenshots and execution results
- `notification_system_design.md` → Stage-wise design responses

---

## Additional Notes

- Protected APIs were accessed using Bearer Token Authentication.
- Screenshots of outputs and execution results are included in the Outputs folder.
- Code has been organized according to the required evaluation structure.
- No database was used wherever explicitly restricted in the problem statement.
