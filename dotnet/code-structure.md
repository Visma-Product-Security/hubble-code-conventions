# Code Structure and Layout

## Namespaces and File Organization

### File Scoped Namespaces
- Use file scoped namespaces for cleaner code
  ```csharp
  namespace Company.Project.Feature;
  
  // Class declarations start here
  ```

### Project Structure
- Namespace structure should match project structure
- One class per file - each class should reside in its own file with a matching filename
- Add an empty line between namespace declaration and the next code element
  ```csharp
  namespace Company.Project.Feature;
  
  public class MyClass
  {
  }
  ```

## Members Organization

### Member Order
- Order members by accessibility and type using this sequence:
  ```
  public, internal, protected, private
  new, abstract, virtual, override, sealed, static, readonly, extern, unsafe, volatile, async
  ```

### Regions
- Do not use regions as they hide code and make it harder to read

## Control Blocks and Spacing

### Braces
- Always use braces for all control blocks, even for single-line blocks
  ```csharp
  if (condition)
  {
      DoSomething();
  }
  ```

### Empty Lines
- Add an empty line before any control structure (if, for, foreach, while, etc.)
- Add an empty line after control blocks
- Add an empty line before return statements
- Add an empty line before method declarations (but no redundant empty lines)

### Example
```csharp
public class Example
{
    private readonly string _name;
    
    public Example(string name)
    {
        _name = name;
    }
    
    public string GetFormattedName()
    {
        var prefix = "Name: ";
        
        if (string.IsNullOrEmpty(_name))
        {
            return prefix + "Unknown";
        }
        
        var result = prefix + _name;
        
        return result;
    }
}
``` 