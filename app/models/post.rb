class Post < ApplicationRecord
    validates :content,{presence: true,length: {maximum: 20}}
    validates :cat_name,{presence: true,length: {maximum: 10}}
    validates :user_id,{presence: true}

    def user
        return User.find_by(id: self.user_id)
    end
end
