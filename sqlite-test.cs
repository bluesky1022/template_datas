using System;
using System.Data.SQLite;

class Program
{
    static void Main()
    {
        string connectionString = "Data Source=sample.db;Version=3;";

        using (var connection = new SQLiteConnection(connectionString))
        {
            connection.Open();

            // Create table
            string createTableQuery = @"
                CREATE TABLE IF NOT EXISTS Users (
                    Id INTEGER PRIMARY KEY AUTOINCREMENT,
                    Name TEXT NOT NULL,
                    Age INTEGER
                );";
            using (var cmd = new SQLiteCommand(createTableQuery, connection))
            {
                cmd.ExecuteNonQuery();
            }

            // Insert data
            string insertQuery = "INSERT INTO Users (Name, Age) VALUES (@name, @age);";
            using (var cmd = new SQLiteCommand(insertQuery, connection))
            {
                cmd.Parameters.AddWithValue("@name", "Alice");
                cmd.Parameters.AddWithValue("@age", 30);
                cmd.ExecuteNonQuery();

                cmd.Parameters["@name"].Value = "Bob";
                cmd.Parameters["@age"].Value = 25;
                cmd.ExecuteNonQuery();
            }

            // Query data
            string selectQuery = "SELECT Id, Name, Age FROM Users;";
            using (var cmd = new SQLiteCommand(selectQuery, connection))
            using (var reader = cmd.ExecuteReader())
            {
                Console.WriteLine("Users:");
                while (reader.Read())
                {
                    Console.WriteLine($"Id: {reader["Id"]}, Name: {reader["Name"]}, Age: {reader["Age"]}");
                }
            }

            // Update data
            string updateQuery = "UPDATE Users SET Age = @age WHERE Name = @name;";
            using (var cmd = new SQLiteCommand(updateQuery, connection))
            {
                cmd.Parameters.AddWithValue("@age", 31);
                cmd.Parameters.AddWithValue("@name", "Alice");
                int rowsUpdated = cmd.ExecuteNonQuery();
                Console.WriteLine($"Rows updated: {rowsUpdated}");
            }

            // Delete data
            string deleteQuery = "DELETE FROM Users WHERE Name = @name;";
            using (var cmd = new SQLiteCommand(deleteQuery, connection))
            {
                cmd.Parameters.AddWithValue("@name", "Bob");
                int rowsDeleted = cmd.ExecuteNonQuery();
                Console.WriteLine($"Rows deleted: {rowsDeleted}");
            }

            // Final query to show remaining data
            Console.WriteLine("Final Users:");
            using (var cmd = new SQLiteCommand(selectQuery, connection))
            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    Console.WriteLine($"Id: {reader["Id"]}, Name: {reader["Name"]}, Age: {reader["Age"]}");
                }
            }
        }
    }
}
