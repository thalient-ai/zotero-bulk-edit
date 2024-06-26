# Attachment Backup Script

This script backs up attachments from selected Zotero items to a specified folder.

## Features

- **Scope Selection**: Prompt user to select the scope of items to process (selected items, items in the current collection, or items in a saved search).
- **Backup Destination**: Allows user to select a folder where the attachments will be copied.
- **Attachment Handling**: Handles multiple attachments per item and supports renaming to avoid duplicate filenames.
- **Detailed Logging**: Logs time taken for each operation and provides detailed error handling and messages.

## Usage

1. **Download the Script**: Download `attachment_backup.js` from the repository.
2. **Open Zotero**: Launch the Zotero application.
3. **Run JavaScript**:
    - Go to `Tools > Developer > Run JavaScript`.
    - Copy and paste the content of `attachment_backup.js` into the Zotero JavaScript console.
    - Press `Run`.

### Example

To back up attachments from selected items:

1. Select the items in Zotero.
2. Run the script.
3. Choose the option to process selected items.

![Screenshot](doc/backup_01.png)

4. Select the destination folder for the backup.

![Screenshot](doc/backup_02.png)

5. Confirm the backup operation.

![Screenshot](doc/backup_03.png)

![Screenshot](doc/backup_04.png)

![Screenshot](doc/backup_05.png)

## Detailed Script Description

The script performs the following steps:

1. **Initialization**: Logs the start time and sets up the Zotero pane.
2. **Scope Selection**: Prompts the user to select the scope of items to process.
    - Options: Selected items, items in the current collection, or items in a saved search.
3. **Retrieve Items**: Retrieves items based on the user’s selection.
4. **Separate Items**: Separates parent items and orphan attachments.
5. **Destination Folder**: Prompts the user to select a backup folder.
6. **Confirmation**: Asks the user to confirm the backup operation.
7. **Backup Process**:
    - Counts total attachments.
    - Backs up attachments by copying files to the selected folder.
    - Handles file name conflicts by appending a counter to duplicate file names.
8. **Completion**: Logs completion time and alerts the user that the backup process is complete.

## Error Handling

- Provides detailed error messages and logs them to the console.
- Prompts the user if invalid options are selected.
- Ensures valid folder paths are selected and handles long path names

## Compatibility
All scripts were written for Zotero 7

![Screenshot](doc/zotero_version.png)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue if you have any suggestions or find any bugs.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.