# Stage 1

## REST API Design

### GET Notifications
GET /notifications

Response:
```json
{
  "notifications": []
}
```

### Mark Notification Read
PUT /notifications/:id/read

### Real Time Notifications
Use WebSockets for live notifications.

---

# Stage 2

## Database Choice

Recommended DB:
PostgreSQL

Reason:
- Structured data
- Fast querying
- ACID compliance

### Schema

Notifications Table:
- id
- studentId
- type
- message
- isRead
- createdAt

---

# Stage 3

## Query Optimization

Problem:
Full table scan causes slow performance.

Solution:
Create indexes on:
- studentId
- isRead
- createdAt

Optimized Query:
```sql
CREATE INDEX idx_notifications
ON notifications(studentId, isRead, createdAt DESC);
```

---

# Stage 4

## Performance Improvements

Suggestions:
- Redis caching
- Pagination
- Lazy loading
- WebSockets

---

# Stage 5

## Notify All Improvements

Problems:
- Sequential processing
- Slow email sending
- Failure handling issues

Better Solution:
- Queue system
- Retry mechanism
- Background workers
- Kafka/RabbitMQ