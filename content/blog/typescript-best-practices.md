---
title: TypeScript Best Practices
date: 2024-01-05
excerpt: Essential TypeScript patterns and practices for writing better, more maintainable code.
author: Austin
tags: [TypeScript, JavaScript, Programming]
---

# TypeScript Best Practices

TypeScript has become the standard for building large-scale JavaScript applications. Here are some best practices to help you write better TypeScript code.

## Type Safety First

### 1. Avoid Using 'any'

The `any` type defeats the purpose of TypeScript. Instead, use proper types or `unknown` when the type is truly unknown:

```typescript
// Bad
function process(data: any) {
  return data.value
}

// Good
function process(data: { value: string }) {
  return data.value
}

// When type is unknown
function process(data: unknown) {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    return (data as { value: string }).value
  }
}
```

### 2. Use Strict Mode

Always enable strict mode in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

## Interface vs Type

Both interfaces and types can be used to define object shapes, but they have different use cases:

```typescript
// Use interface for objects that can be extended
interface User {
  id: string
  name: string
}

interface Admin extends User {
  permissions: string[]
}

// Use type for unions, intersections, and primitives
type Status = 'pending' | 'approved' | 'rejected'
type UserOrAdmin = User | Admin
```

## Utility Types

TypeScript provides powerful utility types:

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

// Partial - makes all properties optional
type PartialTodo = Partial<Todo>

// Pick - select specific properties
type TodoPreview = Pick<Todo, 'title' | 'completed'>

// Omit - exclude specific properties
type TodoWithoutDescription = Omit<Todo, 'description'>

// Readonly - makes all properties readonly
type ReadonlyTodo = Readonly<Todo>
```

## Generics

Generics make your code reusable and type-safe:

```typescript
// Generic function
function identity<T>(value: T): T {
  return value
}

// Generic interface
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

// Generic class
class DataStore<T> {
  private data: T[] = []
  
  add(item: T): void {
    this.data.push(item)
  }
  
  get(index: number): T | undefined {
    return this.data[index]
  }
}
```

## Type Guards

Type guards help TypeScript narrow down types:

```typescript
// typeof guard
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + value
  }
  return padding + value
}

// instanceof guard
class Dog {
  bark() {
    console.log('Woof!')
  }
}

class Cat {
  meow() {
    console.log('Meow!')
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark()
  } else {
    animal.meow()
  }
}

// Custom type guard
interface Fish {
  swim: () => void
}

interface Bird {
  fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}
```

## Async/Await with Types

Properly type your async functions:

```typescript
interface User {
  id: string
  name: string
}

async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`)
  const data: User = await response.json()
  return data
}

// Error handling
async function fetchUserSafe(id: string): Promise<User | null> {
  try {
    const response = await fetch(`/api/users/${id}`)
    if (!response.ok) {
      return null
    }
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch user:', error)
    return null
  }
}
```

## Enum Alternatives

Consider using const objects or union types instead of enums:

```typescript
// Instead of enum
enum Status {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
}

// Use const object
const Status = {
  Pending: 'PENDING',
  Approved: 'APPROVED',
  Rejected: 'REJECTED',
} as const

type Status = typeof Status[keyof typeof Status]

// Or union type
type Status = 'PENDING' | 'APPROVED' | 'REJECTED'
```

## Conclusion

TypeScript is a powerful tool that can significantly improve your code quality and developer experience. By following these best practices, you'll write more maintainable, type-safe code that's easier to refactor and less prone to bugs.

Remember: TypeScript is not just about adding types to JavaScript—it's about making your code more robust and maintainable. Happy typing!
