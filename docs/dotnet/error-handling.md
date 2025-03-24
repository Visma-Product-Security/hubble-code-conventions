# Error Handling

## Exception Management

### Custom Exceptions
- Do not throw generic exceptions from user code
  ```csharp
  // Avoid
  throw new System.Exception("Something went wrong"); 
  
  // Preferred
  throw new InvalidOperationException("Operation cannot be performed");
  ```

### Null Handling
- Return empty collections or arrays instead of nulls to avoid null reference exceptions
  ```csharp
  // Preferred
  return new List<Customer>();
  
  // Instead of
  return null;
  ```

### Query Optimization
- Use LINQ methods efficiently and combine operations where appropriate
  ```csharp
  // Preferred
  var customer = customers.FirstOrDefault(c => c.Id == id);
  
  // Instead of
  var filteredCustomers = customers.Where(c => c.Id == id);
  var customer = filteredCustomers.FirstOrDefault();
  ```

### Validation
- Validate inputs at the entry point of public methods
  ```csharp
  public void ProcessOrder(Order order)
  {
      if (order == null)
      {
          throw new ArgumentNullException(nameof(order));
      }
      
      if (order.Items.Count == 0)
      {
          throw new ArgumentException("Order must contain at least one item", nameof(order));
      }
      
      // Process the order
  }
  ``` 