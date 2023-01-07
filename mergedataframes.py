"""
A python module with functions able to parse multiple CSV files and create a single CSV file.
REQUIREMENTS FOR CSVS:
- CSVs must have unique column headers.
"""


# Imports
import pandas as pd


# Constants


def add_extra_datapoints(base_data: pd.DataFrame, csv_name: str, identifier_index: int, added_index: int, column_name: str, base_index: int=0) -> pd.DataFrame:
    """
    Add a single column to the base_data DataFrame.
    :param base_data: A Pandas DataFrame.
    :param csv_name: A string representing the name of the CSV to add a column from.
    :param identifier_index: An integer representing the index to use as an identifier to match with base_data. 
    :param added_index: An integer representing the index of the column to add to the Pandas DataFrame.
    :param column_name: An identifier to name the column in the Pandas DataFrame.
    :param base_index: The column in the base DataFrame to match the two DataFrames with (default 0)
    :return: base_data with an added column containing additional data.
    """
    base_identifiers = base_data.iloc[:, base_index]
    df = pd.read_csv(csv_name)
    identifiers_in_csv = [identifier for identifier in df.iloc[:, identifier_index]]


    def map_identifiers_in_csv(identifier: str) -> int:
        """
        Return the player data from the column being added to a DataFrame.
        :param identifier: A string containing an identifier.
        :return: A value representing the additional information, or None if the identifier does not exist in the additional DataFrame.
        """
        if identifier in identifiers_in_csv:
            return df.iloc[identifiers_in_csv.index(identifier), added_index]
        else:
            return

            
    base_data[column_name] = list(map(map_identifiers_in_csv, base_identifiers))
    return base_data
    

def main() -> None:
    """
    Execute the program.
    """
    pass


if __name__ == "__main__":
    main()