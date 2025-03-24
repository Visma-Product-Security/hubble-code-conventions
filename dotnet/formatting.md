# Formatting Rules

## Control Structures

### If Statements
- Format if-else statements consistently with braces on separate lines
  ```csharp
  if (condition)
  {
      // code
  }
  else if (anotherCondition)
  {
      // code
  }
  else
  {
      // code
  }
  ```

### Conditional Logic
- Use positive conditions (avoid negated conditions when possible)
  ```csharp
  // Preferred
  if (isValid)
  {
      DoSomething();
  }
  else
  {
      HandleInvalid();
  }
  
  // Instead of
  if (!isValid)
  {
      HandleInvalid();
  }
  else
  {
      DoSomething();
  }
  ```

## Spacing

### Operators
- Add one space before and after comparison and assignment operators
  ```csharp
  // Correct
  if (age > 18 && name == "John")
  
  // Incorrect
  if (age>18 && name=="John")
  ```

### Collection Initialization
- Format long lists with each item on a new line for readability
  ```csharp
  private readonly List<string> _actingRoles =
  [
      ContactType.LUManagingDirector,
      ContactType.LUSecurityContact,
      ContactType.LUVSPPartner,
      ContactType.LUDPM,
      ContactType.LUBoardMember,
      ContactType.LUWhistleBlowingMainResponsible
  ];
  ```

## Attributes and Decorators

### Placement
- Place attributes/decorators on separate lines, on top of the class or method they decorate
  ```csharp
  [Column("DomainId")]
  [IsReadOnly]
  public override Guid Id { get; set; }
  ```

## Comments

### API Documentation
- Include XML comments on controller methods and endpoints to describe their functionality
  ```csharp
  /// <summary>
  /// Retrieves a customer by ID
  /// </summary>
  /// <param name="id">The customer ID</param>
  /// <returns>The customer information</returns>
  [HttpGet("{id}")]
  public ActionResult<CustomerViewModel> GetCustomer(Guid id)
  {
      // Implementation
  }
  ``` 