class TvSeries {

    constructor() {
        this.card13ReasonsWhy = 'a[href*="/location/13-reasons-why-locations-235"]';
        this.commentNameInput = '[id="commentname"]'
        this.commentTextInput = '[id="commenttext"]'
        this.sendBtn = '[id="sendcomment"]'
        this.approbalMsg = '[id="tagmessage"]'
    }

    get Card13ReasonsWhy() {
        return cy.get(this.card13ReasonsWhy);
    }

    get CommentNameInput() {
        return cy.get(this.commentNameInput);
    }

    get CommentTextInput() {
        return cy.get(this.commentTextInput);
    }

    get SendBtn() {
        return cy.get(this.sendBtn);
    }

    get ApprobalMsg() {
        return cy.get(this.approbalMsg);
    }
};

const tvSeries = new TvSeries();
export default tvSeries;