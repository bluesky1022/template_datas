using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqExample
{
    class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string City { get; set; }
    }

    class Program
    {
        static void Main()
        {
            // Sample data
            List<Person> people = new List<Person>
            {
                new Person { Name = "Alice", Age = 30, City = "New York" },
                new Person { Name = "Bob", Age = 20, City = "Seattle" },
                new Person { Name = "Charlie", Age = 35, City = "New York" },
                new Person { Name = "David", Age = 28, City = "Seattle" },
                new Person { Name = "Eva", Age = 22, City = "Chicago" },
                new Person { Name = "Frank", Age = 40, City = "Chicago" }
            };

            // LINQ query
            var query = people
                .Where(p => p.Age > 25)                        // Filter: Age > 25
                .OrderByDescending(p => p.Age)                 // Sort by Age descending
                .Select(p => new { p.Name, p.Age, p.City });  // Project to anonymous object

            Console.WriteLine("People older than 25, ordered by age descending:");
            foreach (var person in query)
            {
                Console.WriteLine($"{person.Name} ({person.Age}) from {person.City}");
            }

            Console.WriteLine("\nAverage age per city (for people older than 25):");
            // Group by city and calculate average age
            var avgAgePerCity = query
                .GroupBy(p => p.City)
                .Select(g => new
                {
                    City = g.Key,
                    AverageAge = g.Average(p => p.Age),
                    Count = g.Count()
                });

            foreach (var group in avgAgePerCity)
            {
                Console.WriteLine($"{group.City}: Average Age = {group.AverageAge:F1}, Count = {group.Count}");
            }
        }
    }
}
