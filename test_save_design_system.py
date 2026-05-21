import unittest
from unittest.mock import patch, mock_open
import importlib
import sys

class TestSaveDesignSystem(unittest.TestCase):
    @patch("json.dump")
    @patch("builtins.open", new_callable=mock_open)
    def test_save_design_system(self, mock_file, mock_json_dump):
        if "save_design_system" in sys.modules:
            import save_design_system
            importlib.reload(save_design_system)
        else:
            import save_design_system

        mock_file.assert_called_once_with("design_system.json", "w")
        mock_json_dump.assert_called_once()

        args, kwargs = mock_json_dump.call_args
        self.assertIn("designSystems", args[0])
        self.assertEqual(args[1], mock_file())
        self.assertEqual(kwargs.get("indent"), 2)

if __name__ == '__main__':
    unittest.main()
