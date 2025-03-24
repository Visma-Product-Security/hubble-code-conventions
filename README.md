# Hubble Code Conventions

This documentation provides coding standards and best practices for different technology stacks used within the organization.

**Documentation:** [https://friendly-tribble-4j89m3n.pages.github.io/](https://friendly-tribble-4j89m3n.pages.github.io/)

## Technology Stacks

### [.NET Conventions](dotnet/README.md)

Our .NET coding conventions cover C# best practices, formatting rules, and guidelines for building maintainable applications.

**Topics:**
- [Naming Conventions](dotnet/naming-conventions.md)
- [Code Structure](dotnet/code-structure.md)
- [Type Usage](dotnet/type-usage.md)
- [Formatting](dotnet/formatting.md)
- [Error Handling](dotnet/error-handling.md)
- [Testing](dotnet/testing.md)
- [Code Quality](dotnet/code-quality.md)

### [Angular Conventions](angular/README.md)

Our Angular coding conventions cover TypeScript and Angular-specific guidelines for building frontends.

## Running Locally

### Prerequisites
- Ruby (version 2.7.0 or higher)
- RubyGems
- Bundler

### Windows
1. Install Ruby using [RubyInstaller](https://rubyinstaller.org/)
2. Open Command Prompt or PowerShell and run:
   ```
   gem install bundler
   bundle install
   bundle exec jekyll serve
   ```
3. Open your browser and navigate to `http://localhost:4000`

### Linux/macOS
1. Install Ruby using your package manager or [rbenv](https://github.com/rbenv/rbenv)
   ```bash
   # Ubuntu/Debian
   sudo apt install ruby-full build-essential

   # Fedora
   sudo dnf install ruby ruby-devel
   
   # macOS (with Homebrew)
   brew install ruby
   ```
2. Install and run:
   ```bash
   gem install bundler
   bundle install
   bundle exec jekyll serve
   ```
3. Open your browser and navigate to `http://localhost:4000`

## Contributing

To contribute to these code conventions, please:

1. Create a branch with your proposed changes
2. Submit a pull request for review
3. Address any feedback before merging
