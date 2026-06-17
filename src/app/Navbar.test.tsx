import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

// Mock the next/navigation module
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Navbar Component", () => {
  const mockUsePathname = usePathname as jest.Mock;

  beforeEach(() => {
    // Default mock implementation
    mockUsePathname.mockReturnValue("/");
    jest.clearAllMocks();
  });

  it("renders the brand name correctly", () => {
    render(<Navbar />);
    const brandElement = screen.getByText("GIRIDHAR REDDY");
    expect(brandElement).toBeInTheDocument();
    expect(brandElement).toHaveAttribute("href", "/");
  });

  it("renders all desktop navigation links", () => {
    render(<Navbar />);

    // Desktop links are rendered, we can find them by their text and hrefs
    const navItems = [
      { name: "Domvio", path: "/domvio" },
      { name: "Stack", path: "/stack" },
      { name: "Archive", path: "/archive" },
      { name: "Context", path: "/context" },
      { name: "About", path: "/about" },
    ];

    navItems.forEach((item) => {
      // Find links. We might get two elements for each link (desktop and mobile),
      // but mobile links are only rendered when isOpen is true.
      const linkElement = screen.getByRole("link", { name: item.name });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", item.path);
    });
  });

  it("highlights the active link based on usePathname", () => {
    // Mock the pathname to be /stack
    mockUsePathname.mockReturnValue("/stack");

    render(<Navbar />);

    const activeLink = screen.getByRole("link", { name: "Stack" });
    const inactiveLink = screen.getByRole("link", { name: "Domvio" });

    // Check classes applied to the active link
    expect(activeLink).toHaveClass("text-secondary", "font-bold", "border-b-2", "border-secondary");

    // Check classes applied to the inactive link
    expect(inactiveLink).toHaveClass("text-on-surface-variant");
    expect(inactiveLink).not.toHaveClass("text-secondary", "font-bold", "border-b-2", "border-secondary");
  });

  it("toggles the mobile menu when the button is clicked", () => {
    render(<Navbar />);

    // Mobile menu should initially be hidden
    // The links aren't rendered because isOpen is false
    const toggleButton = screen.getByLabelText("Toggle navigation menu");

    // Initially, there should only be one set of links (desktop)
    expect(screen.getAllByRole("link", { name: "Domvio" })).toHaveLength(1);

    // Click the toggle button to open the mobile menu
    fireEvent.click(toggleButton);

    // Now there should be two sets of links (desktop and mobile)
    expect(screen.getAllByRole("link", { name: "Domvio" })).toHaveLength(2);

    // The mobile menu also contains a Connect link
    const connectLinks = screen.getAllByRole("link", { name: "Connect" });
    expect(connectLinks).toHaveLength(2);

    // Click the toggle button again to close the mobile menu
    fireEvent.click(toggleButton);

    // Back to one set of links
    expect(screen.getAllByRole("link", { name: "Domvio" })).toHaveLength(1);
  });

  it("closes the mobile menu when a navigation link within the mobile menu is clicked", () => {
    render(<Navbar />);

    const toggleButton = screen.getByLabelText("Toggle navigation menu");

    // Open the mobile menu
    fireEvent.click(toggleButton);

    // There should be two sets of links
    const domvioLinks = screen.getAllByRole("link", { name: "Domvio" });
    expect(domvioLinks).toHaveLength(2);

    // Click the second link (the one in the mobile menu)
    fireEvent.click(domvioLinks[1]);

    // The mobile menu should close, so there's only one link again
    expect(screen.getAllByRole("link", { name: "Domvio" })).toHaveLength(1);
  });
});
