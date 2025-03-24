# Naming Conventions

## Variable Naming

### Private Members
- Private fields should start with an underscore (`_`)
  ```csharp
  private string _firstName;
  ```
- Private constants and static variables also follow this pattern
  ```csharp
  private const string _seederName = "DataSeeder";
  private static readonly int _maxRetries = 3;
  ```

### Interfaces
- Interface names must start with the letter "I"
  ```csharp
  public interface IRepository { }
  ```

### Enum Values
- Use PascalCase for enum values
  ```csharp
  public enum Status
  {
      Active = 1,
      Inactive = 2,
      Pending = 3
  }
  ```

## Abbreviations and Acronyms
- Format abbreviations with only the first letter capitalized
  - Example: `PSCProductOwner` should be `PscProductOwner`
  - Example: `DPSA` should be `Dpsa`

## Lambda Parameter Naming
- Use short, meaningful names for lambda parameters
  ```csharp
  // Preferred
  var result = entities.Where(e => e.IsActive);
  
  // For well-known entities, use short abbreviations
  var legalUnit = legalUnits.FirstOrDefault(lu => lu.Id == id);
  var application = applications.FirstOrDefault(app => app.Name == name);
  ``` 