import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: screenWidth * 0.05,
  },
  pageTitle: {
    fontSize: screenWidth * 0.06,
    fontWeight: "bold",
    color: "#333",
    marginBottom: screenHeight * 0.02,
    textAlign: "center",
  },
  welcomeSection: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
  },
  profilePhoto: {
    width: screenHeight * 0.2, // 20% of screen height
    height: screenHeight * 0.2, // 20% of screen height
    borderRadius: screenHeight * 0.05, // Half of the height to keep it circular
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: screenWidth * 0.04,
    color: "#808f87",
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  homeCard: {
    backgroundColor: "#4CAF50",
    padding: screenWidth * 0.05,
    borderRadius: 10,
    marginBottom: screenHeight * 0.02,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  
  cardText: {
    color: "#ffffff",
    fontSize: screenWidth * 0.04,
    marginTop: 5,
  },
  
  section: {
    padding: screenWidth * 0.05,
    backgroundColor: "#ffffff",
    marginVertical: screenHeight * 0.02,
    marginBottom: screenHeight * 0.01,
  },
  sectionTitle: {
    fontSize: screenWidth * 0.045,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notification: {
    fontSize: screenWidth * 0.04,
    color: "#555",
  },
  stat: {
    fontSize: screenWidth * 0.04,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  jobCard: {
    backgroundColor: "#ffffff",
    padding: screenWidth * 0.05,
    borderRadius: 10,
    marginBottom: screenHeight * 0.02,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: "100%", // Make the card expand across the screen
  },
  title: {
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
    color: "#333",
    marginBottom: screenHeight * 0.01,
  },
  details: {
    fontSize: screenWidth * 0.04,
    color: "#808f87",
    marginBottom: screenHeight * 0.005,
  },
  description: {
    fontSize: screenWidth * 0.04,
    color: "#555",
    marginBottom: screenHeight * 0.015,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d3d3d3",
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.04,
    borderRadius: screenWidth * 0.04,
    shadowColor: "#218838",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DC3545",
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.04,
    borderRadius: screenWidth * 0.04,
    shadowColor: "#C82333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: screenWidth * 0.04,
    marginLeft: 5,
  },
  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default globalStyles;
