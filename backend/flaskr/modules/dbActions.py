from connectDb import get_company_collections

"""Get about company data"""
def get_about(company):

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        about_company = document.get('about')

        if about_company:
            print(about_company)

    print(f"Document not found for company {company}")


"""Get checking account data"""
def get_checking(company):

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        checking_info = document.get('checking-savings')

        if checking_info:
            print(checking_info)

    print(f"Document not found for company {company}")

"""Get savings account data"""
def get_savings(company):

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        savings_info = document.get('checking-savings')

        if savings_info:
            print(savings_info)

    print(f"Document not found for company {company}")


"""Get brokerage data"""
def get_brokerage(company):

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        brokerage_info = document.get('brokerage')

        if brokerage_info:
            print(brokerage_info)

    print(f"Document not found for company {company}")

"""Get online commissions data"""
def get_onlineCommissions(company):

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        onlineCommisions = document.get('onlineCommissions')

        if onlineCommisions:
            print(onlineCommisions)

    print(f"Document not found for company {company}")

"""Get margin rates data"""
def get_marginRates(company):

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        marginRates = document.get('marginRates')

        if marginRates:
            print(marginRates)

    print(f"Document not found for company {company}")


"""Get fee information data"""
def get_feeInformation(company):

    # collection
    collection = get_company_collections()

    # document
    document = collection.find_one({"company_name": company})

    if document:
        feeInformation = document.get('feeInformation')

        if feeInformation:
            print(feeInformation)

    print(f"Document not found for company {company}")