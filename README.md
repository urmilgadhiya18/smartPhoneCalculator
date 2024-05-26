# SmartPhoneCalculator (OnePlus Calculator)

### Features

1. **Operator Restriction**:
   - You cannot press any `operation` button more than once consecutively. For example, entering `1++++` or `7---` or `18**` or `9÷÷` is prevented, ensuring valid mathematical expressions.

2. **Initial Operator Validation**:
   - You cannot start an expression with an operator other than minus (`-`). This means expressions like `+1`, `*1`, or `/1` are invalid, maintaining proper input syntax from the start.

3. **AC Button Functionality**:
   - When the AC (All Clear) button is clicked, the display shows zero (`0`), mimicking the behavior of a smartphone calculator. Unlike other calculators that might show a blank screen, this feature provides a consistent and familiar user experience.

4. **Delete Button Behavior**:
   - When you delete the last number in the input, the display automatically shows zero (`0`), similar to the AC button functionality. This ensures the display is never left blank and always maintains a user-friendly state.

### Usage

- **Basic Operations**: Perform addition, subtraction, multiplication, and division as with any standard calculator.
- **Clear Entry**: Use the AC button to reset the calculator and display zero (`0`).
- **Delete Entry**: Use the delete button to remove the last digit. If the last digit is removed, the display will revert to zero (`0`).

### Example Scenarios

1. **Prevent Consecutive Operators**:
   - Input: `5++++` or `7--` or `18**` or `22÷÷` etc...
   - Result: Only one `+` or `-` or `*` or `÷` is accepted, preventing invalid expression `5++++`.

2. **Valid Initial Input**:
   - Input: `+8+1` or `*8-1` or `÷18*4` etc are invalid inputs.
   - Result: The input is corrected to prevent starting with `+` or `*` or `÷`.

3. **AC Button Usage**:
   - Action: Press the AC button
   - Result: The display shows `0`.

4. **Delete Button Usage**:
   - Input: `123`
   - Action: Press the delete button three times
   - Result: The display shows `0`.

This calculator provides a more sophisticated and intuitive interface, ensuring users can perform calculations easily while preventing common input errors.
