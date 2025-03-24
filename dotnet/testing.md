# Unit Testing

## Test Structure

### AAA Pattern
- Organize test methods using the Arrange-Act-Assert pattern
  ```csharp
  [Fact]
  public void CalculateTotal_WithValidItems_ReturnsCorrectSum()
  {
      // Arrange
      var calculator = new Calculator();
      var items = new List<Item>
      {
          new Item { Price = 10 },
          new Item { Price = 20 }
      };
      
      // Act
      var result = calculator.CalculateTotal(items);
      
      // Assert
      result.ShouldBe(30);
  }
  ```

## Test Naming

### Naming Convention
- Name tests using the pattern: `[MethodUnderTest]_[Scenario]_[ExpectedOutcome]`
  ```csharp
  // Examples:
  ApplicationIsNull_Return_NotFoundApplicationMessage()
  GetCustomerById_CustomerExists_ReturnsCustomer()
  SubmitOrder_InvalidItems_ThrowsValidationException()
  ```

## Assertions

### Shouldly Library
- Use Shouldly for more readable assertions
  ```csharp
  // Preferred (Shouldly)
  result.ShouldBe(30);
  customer.ShouldNotBeNull();
  items.ShouldBeEmpty();
  exception.ShouldBeOfType<ArgumentException>();
  
  // Instead of (xUnit)
  Assert.Equal(30, result);
  Assert.NotNull(customer);
  Assert.Empty(items);
  Assert.IsType<ArgumentException>(exception);
  ```

## Test Coverage

### What to Test
- Focus on testing business logic and edge cases
- Test public API surface, not implementation details
- Include both positive and negative test cases

### Mocking
- Use mocking frameworks (like Moq or NSubstitute) to isolate the system under test
  
  ```csharp
  // Arrange
  var mockRepository = new Mock<ICustomerRepository>();
  mockRepository.Setup(repo => repo.GetById(1))
      .Returns(new Customer { Id = 1, Name = "Test Customer" });
      
  var service = new CustomerService(mockRepository.Object);
  
  // Act
  var result = service.GetCustomerById(1);
  
  // Assert
  result.ShouldNotBeNull();
  result.Name.ShouldBe("Test Customer");
  ```