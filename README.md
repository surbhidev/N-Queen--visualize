[recording.webm](https://github.com/user-attachments/assets/4a1f45d3-9cef-48e3-a4e4-13afdcff22de)# N-Queen--visualize

Problem Statement
Place N (N = 4 or 8) queens in a chess board of size N X N, in a such a way that no two queens can attack each other.

    That means
            -Two queens should not be in the same row
            -Two queens should not be in the same column
            -Two queens should not be in the same diagonal

Solution
This is a visualization of the N Queen problem made with HTML, CSS, JavaScript. Using backtracking algorithm, observe how we reach to the solution by placing the queens strategically to find the answer in the most optimize way.

        -Time Complexity: O(N!), where N is the number of queens (or the size of the board)
        -Space Complexity: O(N)

The backtracking algorithm works as follows:
        -It attempts to place queens on the board one by one.
        -If a placement is safe, it moves to the next column.
        -If a placement is not safe, it backtracks (removes the queen) and tries the next row in the same column.
        -This process continues until a solution is found or all possibilities are exhausted

Technical Specification
The application is built with
        1.HTML
        2.CSS
        [recording.webm](https://github.com/user-attachments/assets/0c95f169-8d02-47b0-87bd-06ae6ed8c3d5)
3.JavaScript

