# Type Usage and Collections

## Collection Types

### Concrete Collections
- Prefer concrete collection types (e.g., `List<T>`) over interfaces (e.g., `IEnumerable<T>`) for return values
  ```csharp
  // Preferred
  public List<Customer> GetCustomers() { ... }
  
  // Instead of
  public IEnumerable<Customer> GetCustomers() { ... }
  ```

### Collection Initialization
- Use collection initializers when possible
  ```csharp
  private readonly List<string> _roles =
  [
      "Admin",
      "User",
      "Manager"
  ];
  ```

## Null Handling

### Return Empty Collections
- Return empty collections or arrays instead of nulls
  ```csharp
  // Preferred
  public List<Customer> GetCustomers() => new List<Customer>();
  
  // Instead of
  public List<Customer> GetCustomers() => null;
  ```

### Null Assignment
- Avoid possible null assignment to non-null properties (use nullable reference types appropriately)

## Type Inference

### Using var
- Use `var` when the type is obvious from the right side of the assignment
  ```csharp
  var count = 0;
  var customers = new List<Customer>();
  var dictionary = new Dictionary<string, int>();
  ```

## Enums

### Enum Initialization
- Enum values should start from 1 (not 0) and each value should be explicitly assigned
  ```csharp
  public enum Status
  {
      Active = 1,
      Pending = 2,
      Inactive = 3
  }
  ```

## View Models

### Nested View Models
- Use nested view models when a model has more than 2 related properties that can be logically grouped
  ```csharp
  // Preferred approach
  public class LegalUnitScoreboardViewModel : IViewModel
  {
      public string ServiceName { get; init; }
      public Guid LegalUnitToken { get; init; }
      public decimal AverageScore { get; init; }
      public LegalUnitViewModel LegalUnit { get; init; }
      public List<Guid> ServiceGroupsTokens { get; init; }
  }
  
  public class LegalUnitViewModel : IViewModel
  {
      public string? Region { get; init; }
      public string? Country { get; init; }
      public Guid? SegmentToken { get; init; }
      public Guid? PlGroupToken { get; init; }
      public Guid? CustomerFocusToken { get; init; }
  }
  ```

### Return Types
- Use ViewModels instead of primitive types for method returns, even for single values
  ```csharp
  // Preferred
  public CountViewModel GetCount() => new CountViewModel { Count = 5 };
  
  // Instead of
  public int GetCount() => 5;
  ```

### Records
- Prefer primary constructors for records only
  ```csharp
  public record CustomerRecord(string Name, string Email);
  ``` 