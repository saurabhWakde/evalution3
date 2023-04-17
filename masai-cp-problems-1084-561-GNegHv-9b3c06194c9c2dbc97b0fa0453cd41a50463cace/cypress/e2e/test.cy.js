import data from "../../submissionData.json"; // do not create this file
import "cypress-localstorage-commands";
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

const Data = [
  {
    name: "S",
    desc: "D",
    addDate: "2020-01-01",
    phone: 1234,
    email: "s@gmail.com",
    type: "Relative",
  },
  {
    name: "M",
    desc: "D",
    addDate: "2020-01-01",
    phone: 1234,
    email: "s@gmail.com",
    type: "Friend",
  },
  {
    name: "O",
    desc: "D",
    addDate: "2020-01-01",
    phone: 1234,
    email: "s@gmail.com",
    type: "colleague",
  },
];
describe("Test", function () {
  let acc_score = 1;

  function FormSubmit(data, score, LSLen) {
    cy.get("#name").clear().type(data.name);
    cy.get("#desc").clear().type(data.desc);
    cy.get("#addDate").clear().type(data.addDate);
    cy.get("#phone").clear().type(data.phone);
    cy.get("#email").clear().type(data.email);
    cy.get("#type").select(data.type);
    cy.get("form")
      .submit()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem("contact-list")).length
        ).to.equal(LSLen);
      })
      .then(() => {
        acc_score += score;
      });
  }

  function CheckTable(data, score, index) {
    cy.get("tbody tr").eq(index).contains("td", data.name);
    cy.get("tbody tr").eq(index).contains("td", data.desc);
    cy.get("tbody tr").eq(index).contains("td", data.addDate);
    cy.get("tbody tr").eq(index).contains("td", data.phone);
    cy.get("tbody tr").eq(index).contains("td", data.email);
    cy.get("tbody tr")
      .eq(index)
      .contains("td", data.type)
      .then(() => {
        acc_score += score;
      });
  }

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      // modifyUrl(url);
      beforeEach(() => {
        cy.restoreLocalStorage();
      });

      afterEach(() => {
        cy.saveLocalStorage();
      });
      it("Form Submit Storing Data is LS", () => {
        cy.visit(url);
        FormSubmit(Data[0], 1, 1);
      }); // Score:- 1
      it("Check the LS Data after mutiple form submits", () => {
        FormSubmit(Data[1], 0.5, 2);
        FormSubmit(Data[2], 0.5, 3);
      }); // Score:- 1
      it("Check the Contact List page's Table", () => {
        cy.visit(url + "/contactList.html");
        CheckTable(Data[0], 1, 0);
        CheckTable(Data[1], 1, 1);
        CheckTable(Data[2], 1, 2);
      }); // Score:- 3
      it("Check Filtering in Contact List Page", () => {
        cy.get("select").select("Relative");
        CheckTable(Data[0], 0.5, 0);
        cy.get("select").select("Friend");
        CheckTable(Data[1], 0.5, 0);
        cy.get("select").select("");
        cy.get("tbody tr")
          .should("have.length", 3)
          .then(() => {
            acc_score += 1;
          });
        cy.reload();
      }); // Score:-2
      it("Check the Deleting", () => {
        cy.get("tbody tr").should("have.length", 3);
        cy.get("tbody tr").eq(0).contains("td", "Delete").click();
        cy.get("tbody tr").should("have.length", 2);
        CheckTable(Data[1], 1, 0); // Checking the Deleting
      }); // Score:- 1
      it("Visit Deleted Page and Check Table", () => {
        cy.visit(url + "/deleted.html");
        CheckTable(Data[0], 1, 0);
      }); // Score:- 1
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
