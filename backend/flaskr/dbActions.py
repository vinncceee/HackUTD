from flaskr.connectDb import get_company_collections

"""Get about company data"""
def get_about(company) -> str:

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        about_company = document.get('about')

        if about_company:
            return(about_company)

    return "Document not found for company {company}"


"""Get checking account data"""
def get_checking(company) -> str:

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        checking_info = document.get('checking-savings')

        if checking_info:
            return(checking_info)

    return(f"Document not found for company {company}")

"""Get savings account data"""
def get_savings(company) -> str:

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        savings_info = document.get('checking-savings')

        if savings_info:
            return(savings_info)

    return(f"Document not found for company {company}")


"""Get brokerage data"""
def get_brokerage(company) -> str:

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        brokerage_info = document.get('brokerage')

        if brokerage_info:
            return(brokerage_info)

    return(f"Document not found for company {company}")

"""Get online commissions data"""
def get_onlineCommissions(company) -> str:

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        onlineCommisions = document.get('onlineCommissions')

        if onlineCommisions:
            return(onlineCommisions)

    return(f"Document not found for company {company}")

"""Get margin rates data"""
def get_marginRates(company) -> str:

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        marginRates = document.get('marginRates')

        if marginRates:
            return(marginRates)

    return(f"Document not found for company {company}")


"""Get fee information data"""
def get_feeInformation(company) -> str:

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        feeInformation = document.get('feeInformation')

        if feeInformation:
            return(feeInformation)

    return(f"Document not found for company {company}")

# get_feeInformation('fidelity')